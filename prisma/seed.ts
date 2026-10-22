import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("Seeding database...");

  // Sample Products list
  const sampleProducts = [
    {
      slug: "nike-air-max-270",
      name: "Nike Air Max 270",
      subTitle: "Men's Shoes",
      description: "The Nike Air Max 270 delivers visible air under every step. Updated for modern comfort.",
      image: ["/pictures/preview1.jpg"],
      price: 150.0,
      originalPrice: 180.0,
      isOnSale: true,
      stock: 20,
      size: ["US 8", "US 9", "US 10", "US 11"],
      category: "shoes",
      gender: "men",
    },
    {
      slug: "nike-dri-fit-tshirt",
      name: "Nike Dri-FIT Legend",
      subTitle: "Men's Fitness T-Shirt",
      description: "Sweat-wicking power combines with a soft feel in this lightweight workout tee.",
      image: ["/pictures/preview2.jpg"],
      price: 35.0,
      originalPrice: 45.0,
      isOnSale: true,
      stock: 50,
      size: ["S", "M", "L", "XL"],
      category: "apparel",
      gender: "men",
    },
    {
      slug: "nike-air-force-1-women",
      name: "Nike Air Force 1 '07",
      subTitle: "Women's Shoes",
      description: "The radiance lives on in the Nike Air Force 1 '07, the basketball icon that puts a fresh spin on classic details.",
      image: ["/pictures/preview3.jpg"],
      price: 115.0,
      originalPrice: 130.0,
      isOnSale: true,
      stock: 15,
      size: ["US 6", "US 7", "US 8"],
      category: "shoes",
      gender: "women",
    },
    {
      slug: "nike-sportswear-club-fleece-women",
      name: "Nike Sportswear Club Fleece",
      subTitle: "Women's Oversized Hoodie",
      description: "Club Fleece sweatshirts are universally loved for their cozy feel and relaxed fit.",
      image: ["/pictures/preview1.jpg"],
      price: 65.0,
      originalPrice: null,
      isOnSale: false,
      stock: 30,
      size: ["XS", "S", "M", "L"],
      category: "apparel",
      gender: "women",
    },
    {
      slug: "nike-revolution-6-kids",
      name: "Nike Revolution 6 Next Nature",
      subTitle: "Big Kids' Road Running Shoes",
      description: "Lightweight, breathable, and cushioned for all-day active play for kids.",
      image: ["/pictures/preview2.jpg"],
      price: 55.0,
      originalPrice: 70.0,
      isOnSale: true,
      stock: 25,
      size: ["3.5Y", "4Y", "5Y", "6Y"],
      category: "shoes",
      gender: "kids",
    },
    {
      slug: "nike-tech-fleece-joggers-men",
      name: "Nike Tech Fleece Joggers",
      subTitle: "Men's Slim Fit Joggers",
      description: "Signature lightweight warmth with an updated slim fit tailored for everyday comfort.",
      image: ["/pictures/preview3.jpg"],
      price: 125.0,
      originalPrice: null,
      isOnSale: false,
      stock: 18,
      size: ["S", "M", "L", "XL"],
      category: "apparel",
      gender: "men",
    }
  ];

  const createdProducts = [];
  for (const item of sampleProducts) {
    const prod = await prisma.product.upsert({
      where: { slug: item.slug },
      update: item,
      create: item,
    });
    createdProducts.push(prod);
  }

  // Create a default demo user and cart
  const user = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: { id: "44b7f8b2-21e2-4433-ae75-f1f2cc3a1e03" },
    create: {
      id: "44b7f8b2-21e2-4433-ae75-f1f2cc3a1e03",
      email: "demo@example.com",
      name: "Demo User",
    },
  });

  // Create favorite entries for the user
  for (const prod of createdProducts.slice(0, 3)) {
    const existingFav = await prisma.favorite.findFirst({
      where: { userId: user.id, productId: prod.id }
    });
    if (!existingFav) {
      await prisma.favorite.create({
        data: {
          userId: user.id,
          productId: prod.id,
        }
      });
    }
  }

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
    where: { cartId: cart.id, productId: createdProducts[0].id },
  });

  if (!existingItem1) {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: createdProducts[0].id,
        quantity: 1,
        size: "US 9",
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
