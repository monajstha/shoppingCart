import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../src/components/ProductCard";

// Mocking useNavigate
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom"); // Keep the original functionality
  return {
    ...actual,
    useNavigate: () => mockNavigate, // Mock implementation
  };
});

describe("ProductCard", () => {
  beforeEach(() => {
    mockNavigate.mockClear(); // Clear the mock before each test
  });

  it("renders product details and navigates on click", async () => {
    const productDetails = {
      id: 1,
      title: "Sample Product",
      image: "https://via.placeholder.com/150",
      price: 29.99,
    };

    render(
      <MemoryRouter>
        <ProductCard productDetails={productDetails} />
      </MemoryRouter>
    );

    // Verify product details are rendered
    expect(screen.getByText(/Sample Product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$29.99/)).toBeInTheDocument();
    expect(screen.getByAltText(/Sample Product/i)).toBeInTheDocument();

    // Simulate a click on the product card
    const card = screen.getByText(/Sample Product/i).closest("div");
    await userEvent.click(card);

    // Verify navigation was triggered
    expect(mockNavigate).toHaveBeenCalledWith(`/products/${productDetails.id}`);
  });
});

describe("ProductCard Snapshot", () => {
  it("matches snapshot", () => {
    const productDetails = {
      id: 1,
      title: "Sample Product",
      image: "https://via.placeholder.com/150",
      price: 29.99,
    };

    const { container } = render(
      <MemoryRouter>
        <ProductCard productDetails={productDetails} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
