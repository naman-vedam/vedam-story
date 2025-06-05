"use client"

import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import ProductCarousel from "@/components/product-carousel"

const meta: Meta<typeof ProductCarousel> = {
  title: "Components/ProductCarousel",
  component: ProductCarousel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof ProductCarousel>

const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    image: "https://via.placeholder.com/400x300?text=Headphones",
    description: "High quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149.99",
    image: "https://via.placeholder.com/400x300?text=Smart+Watch",
    description: "Track your fitness and notifications with this stylish smartwatch.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$49.99",
    image: "https://via.placeholder.com/400x300?text=Gaming+Mouse",
    description: "Ergonomic gaming mouse with customizable buttons.",
  },
]

export const Default: Story = {
  args: {
    products: sampleProducts,
  },
}

export const AutoPlay: Story = {
  args: {
    products: sampleProducts,
    autoPlay: true,
    autoPlayInterval: 3000,
  },
}

export const SingleProduct: Story = {
  args: {
    products: [sampleProducts[0]],
  },
}

export const NoProducts: Story = {
  args: {
    products: [],
  },
}
