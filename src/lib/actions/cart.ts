'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

async function getOrCreateCart() {
  let cart = await prisma.cart.findFirst()

  if (!cart) {
    let user = await prisma.user.findFirst()
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: 'demo@atlas.com', 
          name : 'Demo User',
        },
      })
    }

    cart = await prisma.cart.create({
      data: {
        userId: user.id,
      },
    })
  }
  return cart
}

export async function addToCart(productId: string, size: string, quantity = 1) {
  try {
    const cart = await getOrCreateCart()

    const existingItem = await prisma.cartItem.findFirst({
      where : {
        cartId: cart.id,
        productId,
        size,
      },
    })

    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { 
          quantity: {
            increment: quantity,
          }
        },
      })
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          size,
          quantity,
        },
      })
    }

    revalidatePath('/cart')
    return { success: true }
  } catch (error) {
    console.error('Failed to add to cart', error)
    return { success: false, error: 'Failed to add to cart'}
  }
}

export async function updateCartQuantity(cartItemId: string, newQuantity: number) {
  try {
    if (newQuantity <= 0) {
      return await removeFromCart(cartItemId)
    }

    await prisma.cartItem.update({
      where: { id : cartItemId },
      data: { quantity : newQuantity }
    })

    revalidatePath('/cart')
    return { success: true }
  } catch (error) {
    console.error('Failed to update cart quantity: ', error)
    return { success: false, error: 'Failed to update cart quantity'}
  }
}

export async function removeFromCart(cartItemId: string) {
  try {
    await prisma.cartItem.delete({
      where : { id: cartItemId },
    })

    revalidatePath('/cart')
    return { success: true }
  } catch (error) {
    console.error('Failed to remove item from cart:', error)
    return { success: false, error: 'Failed to remove item from cart'}
  }
}