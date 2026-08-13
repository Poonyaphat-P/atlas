import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding database...");

  // Create or update sample products
  const product1 = await prisma.product.upsert({
    where: { slug: "nike-air-max-270" },
    update: {},
    create: {
      slug: "nike-air-max-270",
      name: "Nike Air Max 270",
      subTitle: "Men's Shoes",
      description: "The Nike Air Max 270 delivers visible air under every step. Updated for modern comfort.",
      image: ["/pictures/preview1.jpg"],
      price: 150.0,
      stock: 20,
      size: ["US 8", "US 9", "US 10", "US 11"],
      category: "shoes",
      gender: "men",
    },
  });

  const product2 = await prisma.product.upsert({
    where: { slug: "nike-dri-fit-tshirt" },
    update: {},
    create: {
      slug: "nike-dri-fit-tshirt",
      name: "Nike Dri-FIT Legend",
      subTitle: "Men's Fitness T-Shirt",
      description: "Sweat-wicking power combines with a soft feel in this lightweight workout tee.",
      image: ["/pictures/preview1.jpg"],
      price: 35.0,
      stock: 50,
      size: ["S", "M", "L", "XL"],
      category: "apparel",
      gender: "men",
    },
  });

  // Create a default demo user and cart
  const user = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      name: "Demo User",
    },
  });

  let cart = await prisma.cart.findFirst({
    where: { userId: user.id },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: {
        userId: user.id,
      },
    });
  }

  // Ensure default cart items exist
  const existingItem1 = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId: product1.id },
  });

  if (!existingItem1) {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: product1.id,
        quantity: 1,
        size: "US 9",
      },
    });
  }

  const existingItem2 = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId: product2.id },
  });

  if (!existingItem2) {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: product2.id,
        quantity: 2,
        size: "M",
      },
    });
  }

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
