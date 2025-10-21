import { useState } from 'react';
import { Coffee, Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DrinkOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  category: 'hot' | 'cold' | 'specialty';
}

interface OrderItem {
  drink: DrinkOption;
  size: 'small' | 'medium' | 'large';
  milk: string;
  toppings: string[];
  quantity: number;
}

export function MenuPage() {
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<DrinkOption | null>(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Customization options
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [milk, setMilk] = useState('Whole Milk');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const drinks: DrinkOption[] = [
    {
      id: '1',
      name: 'Classic Espresso',
      description: 'Rich and bold espresso shot',
      basePrice: 3.5,
      image: 'https://images.unsplash.com/photo-1727421586273-34da74740a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      category: 'hot',
    },
    {
      id: '2',
      name: 'Café Latte',
      description: 'Smooth espresso with steamed milk',
      basePrice: 4.5,
      image: 'https://images.unsplash.com/photo-1727421586273-34da74740a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      category: 'hot',
    },
    {
      id: '3',
      name: 'Cappuccino',
      description: 'Equal parts espresso, steamed milk, and foam',
      basePrice: 4.5,
      image: 'https://images.unsplash.com/photo-1727421586273-34da74740a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      category: 'hot',
    },
    {
      id: '4',
      name: 'Mocha',
      description: 'Espresso with chocolate and steamed milk',
      basePrice: 5.0,
      image: 'https://images.unsplash.com/photo-1727421586273-34da74740a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      category: 'hot',
    },
    {
      id: '5',
      name: 'Iced Coffee',
      description: 'Cold brew served over ice',
      basePrice: 4.0,
      image: 'https://images.unsplash.com/photo-1727421586273-34da74740a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      category: 'cold',
    },
    {
      id: '6',
      name: 'Iced Latte',
      description: 'Espresso with cold milk over ice',
      basePrice: 5.0,
      image: 'https://images.unsplash.com/photo-1727421586273-34da74740a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      category: 'cold',
    },
    {
      id: '7',
      name: 'Pup Cup Special',
      description: 'Dog-friendly whipped cream treat (for your furry friend!)',
      basePrice: 2.0,
      image: 'https://images.unsplash.com/photo-1712746438669-cc8d7193b08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      category: 'specialty',
    },
    {
      id: '8',
      name: 'Honey Lavender Latte',
      description: 'Our signature blend with local honey',
      basePrice: 5.5,
      image: 'https://images.unsplash.com/photo-1727421586273-34da74740a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      category: 'specialty',
    },
  ];

  const sizeOptions = {
    small: { label: 'Small (8oz)', price: 0 },
    medium: { label: 'Medium (12oz)', price: 0.5 },
    large: { label: 'Large (16oz)', price: 1.0 },
  };

  const milkOptions = [
    { name: 'Whole Milk', price: 0 },
    { name: 'Oat Milk', price: 0.75 },
    { name: 'Almond Milk', price: 0.75 },
    { name: 'Soy Milk', price: 0.75 },
    { name: 'Coconut Milk', price: 0.75 },
  ];

  const toppingOptions = [
    { name: 'Extra Shot', price: 1.0 },
    { name: 'Vanilla Syrup', price: 0.75 },
    { name: 'Caramel Syrup', price: 0.75 },
    { name: 'Chocolate Drizzle', price: 0.5 },
    { name: 'Whipped Cream', price: 0.5 },
    { name: 'Cinnamon', price: 0.25 },
  ];

  const calculatePrice = () => {
    if (!selectedDrink) return 0;

    let total = selectedDrink.basePrice;
    total += sizeOptions[size].price;

    const selectedMilkOption = milkOptions.find((m) => m.name === milk);
    if (selectedMilkOption) {
      total += selectedMilkOption.price;
    }

    selectedToppings.forEach((topping) => {
      const toppingOption = toppingOptions.find((t) => t.name === topping);
      if (toppingOption) {
        total += toppingOption.price;
      }
    });

    return total;
  };

  const toggleTopping = (topping: string) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((t) => t !== topping)
        : [...prev, topping]
    );
  };

  const addToCart = () => {
    if (!selectedDrink) return;

    const newItem: OrderItem = {
      drink: selectedDrink,
      size,
      milk,
      toppings: [...selectedToppings],
      quantity: 1,
    };

    setCart((prev) => [...prev, newItem]);
    setSelectedDrink(null);
    setSize('medium');
    setMilk('Whole Milk');
    setSelectedToppings([]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const getItemPrice = (item: OrderItem) => {
    let total = item.drink.basePrice;
    total += sizeOptions[item.size].price;

    const milkOption = milkOptions.find((m) => m.name === item.milk);
    if (milkOption) {
      total += milkOption.price;
    }

    item.toppings.forEach((topping) => {
      const toppingOption = toppingOptions.find((t) => t.name === topping);
      if (toppingOption) {
        total += toppingOption.price;
      }
    });

    return total * item.quantity;
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + getItemPrice(item), 0);
  };

  const updateQuantity = (index: number, delta: number) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const submitOrder = () => {
    setOrderSubmitted(true);
    setTimeout(() => {
      setCart([]);
      setOrderSubmitted(false);
    }, 3000);
  };

  const categories = [
    { id: 'hot', label: 'Hot Drinks' },
    { id: 'cold', label: 'Cold Drinks' },
    { id: 'specialty', label: 'Specialty' },
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-amber-900 text-5xl mb-4">Our Menu</h1>
          <p className="text-gray-700 text-lg">
            Handcrafted beverages made with love for you and your pup
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2 space-y-8">
            {categories.map((category) => (
              <div key={category.id}>
                <h2 className="text-amber-900 text-3xl mb-6">{category.label}</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {drinks
                    .filter((drink) => drink.category === category.id)
                    .map((drink) => (
                      <div
                        key={drink.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedDrink(drink)}
                      >
                        <div className="aspect-video overflow-hidden">
                          <ImageWithFallback
                            src={drink.image}
                            alt={drink.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-amber-900 text-xl mb-2">
                            {drink.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {drink.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-amber-700">
                              From ${drink.basePrice.toFixed(2)}
                            </span>
                            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                              Customize
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Customization & Cart */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Customization Panel */}
              {selectedDrink && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-amber-900 text-2xl mb-4">
                    Customize Your Order
                  </h3>

                  <div className="mb-4">
                    <h4 className="text-gray-700 mb-2">Selected Drink</h4>
                    <p className="text-amber-800">{selectedDrink.name}</p>
                  </div>

                  {/* Size Selection */}
                  <div className="mb-4">
                    <h4 className="text-gray-700 mb-2">Size</h4>
                    <div className="space-y-2">
                      {Object.entries(sizeOptions).map(([key, option]) => (
                        <label
                          key={key}
                          className="flex items-center justify-between p-3 border rounded cursor-pointer hover:bg-amber-50"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="size"
                              checked={size === key}
                              onChange={() => setSize(key as any)}
                              className="accent-amber-600"
                            />
                            <span>{option.label}</span>
                          </div>
                          <span className="text-amber-700">
                            {option.price > 0 ? `+$${option.price.toFixed(2)}` : 'Base'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Milk Selection */}
                  <div className="mb-4">
                    <h4 className="text-gray-700 mb-2">Milk Type</h4>
                    <select
                      value={milk}
                      onChange={(e) => setMilk(e.target.value)}
                      className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {milkOptions.map((option) => (
                        <option key={option.name} value={option.name}>
                          {option.name}
                          {option.price > 0 ? ` (+$${option.price.toFixed(2)})` : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Toppings */}
                  <div className="mb-6">
                    <h4 className="text-gray-700 mb-2">Add-ons</h4>
                    <div className="space-y-2">
                      {toppingOptions.map((topping) => (
                        <label
                          key={topping.name}
                          className="flex items-center justify-between p-3 border rounded cursor-pointer hover:bg-amber-50"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={selectedToppings.includes(topping.name)}
                              onChange={() => toggleTopping(topping.name)}
                              className="accent-amber-600"
                            />
                            <span>{topping.name}</span>
                          </div>
                          <span className="text-amber-700">
                            +${topping.price.toFixed(2)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-700">Total Price:</span>
                      <span className="text-amber-800 text-2xl">
                        ${calculatePrice().toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={addToCart}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              )}

              {/* Cart */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-amber-900 text-2xl mb-4 flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6" />
                  Your Order
                </h3>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item, index) => (
                        <div
                          key={index}
                          className="border-b pb-4 last:border-0"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h4 className="text-amber-900">
                                {item.drink.name}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {sizeOptions[item.size].label} • {item.milk}
                              </p>
                              {item.toppings.length > 0 && (
                                <p className="text-gray-600 text-sm">
                                  + {item.toppings.join(', ')}
                                </p>
                              )}
                            </div>
                            <span className="text-amber-700">
                              ${getItemPrice(item).toFixed(2)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(index, -1)}
                                className="p-1 rounded hover:bg-gray-100"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(index, 1)}
                                className="p-1 rounded hover:bg-gray-100"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(index)}
                              className="text-red-600 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-700">Total:</span>
                        <span className="text-amber-800 text-2xl">
                          ${getCartTotal().toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={submitOrder}
                        disabled={orderSubmitted}
                        className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                          orderSubmitted
                            ? 'bg-green-600 text-white'
                            : 'bg-amber-600 hover:bg-amber-700 text-white'
                        }`}
                      >
                        {orderSubmitted ? (
                          <>
                            <Check className="w-5 h-5" />
                            Order Submitted!
                          </>
                        ) : (
                          <>
                            <Coffee className="w-5 h-5" />
                            Submit Order
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
