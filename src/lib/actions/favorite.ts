'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

async function getCurrentUser() {
  let user = await prisma.user.findFirst({
    where: {
        email: 'demo@atlas.com'
    },
  })

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: 'demo@atlas.com',
        name: 'Demo User',
      },
    })
  }
  
  return user
}

export async function toggleFavorite(productId: string) {
  try {
    const user = await getCurrentUser()

    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        userId: user.id,
        productId,
      },
    })

    if (existingFavorite) {
      await prisma.favorite.delete({
        where: {
          id: existingFavorite.id
        },
      })

      revalidatePath('/favorite')

      return {
        success: true,
        favorited: false,
      }
    }

    await prisma.favorite.create({
      data: {
        userId: user.id,
        productId,
      },
    })

    revalidatePath('/favorite')

    return {
      success: true,
      favorited: true,
    }
  } catch (error) {
    console.error('Failed to toggle favorite', error)
    return { 
      success: false, 
      error: 'Failed to toggle favorite'
    }
  }
}

export async function getFavoriteStatus(productId: string) {
  try {
    const user = await getCurrentUser()

    const favoriteStatus = await prisma.favorite.findFirst({
      where: {
        userId: user.id,
        productId,
      }
    })

    return {
      success: true,
      favorited: Boolean(favoriteStatus),
    }
  } catch (error) {
    console.error('Failed to get favorite status', error)
    return {
      success: false,
      favorited: false,
    }
  }
}