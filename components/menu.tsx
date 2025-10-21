import { useState } from 'react';
import Navigation from './navigation';
import { Coffee, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner@2.0.3';

interface MenuProps {
  onNavigate: (page: 'home' | 'menu' | 'events' | 'membership') => void;
}

interface DrinkItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
}

interface OrderItem {
  drink: DrinkItem;
  size: string;
  milkType: string;
  toppings: string[];
  quantity: number;
  totalPrice: number;
}

const drinks: DrinkItem[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich, bold Italian-style espresso shot',
    basePrice: 3.50
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso with hot water for a smooth finish',
    basePrice: 4.00
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Smooth espresso with steamed milk and light foam',
    basePrice: 5.00
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso with equal parts steamed milk and foam',
    basePrice: 5.00
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Rich chocolate and espresso with steamed milk',
    basePrice: 5.50
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Slow-steeped coffee served over ice',
    basePrice: 4.50
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha with your choice of milk',
    basePrice: 5.50
  },
  {
    id: 'chai-latte',
    name: 'Chai Latte',
    description: 'Spiced tea with steamed milk',
    basePrice: 5.00
  }
];

const sizeOptions = [
  { name: 'Small (8oz)', value: 'small', price: 0 },
  { name: 'Medium (12oz)', value: 'medium', price: 0.75 },
  { name: 'Large (16oz)', value: 'large', price: 1.50 }
];

const milkOptions = [
  { name: 'Whole Milk', value: 'whole', price: 0 },
  { name: 'Oat Milk', value: 'oat', price: 0.75 },
  { name: 'Almond Milk', value: 'almond', price: 0.75 },
  { name: 'Soy Milk', value: 'soy', price: 0.75 },
  { name: 'Coconut Milk', value: 'coconut', price: 0.75 }
];

const toppingOptions = [
  { name: 'Extra Shot', value: 'extra-shot', price: 1.00 },
  { name: 'Vanilla Syrup', value: 'vanilla', price: 0.50 },
  { name: 'Caramel Syrup', value: 'caramel', price: 0.50 },
  { name: 'Hazelnut Syrup', value: 'hazelnut', price: 0.50 },
  { name: 'Whipped Cream', value: 'whip', price: 0.50 },
  { name: 'Cinnamon', value: 'cinnamon', price: 0.25 }
];

export default function Menu({ onNavigate }: MenuProps) {
  const [selectedDrink, setSelectedDrink] = useState<DrinkItem | null>(null);
  const [size, setSize] = useState('medium');
  const [milkType, setMilkType] = useState('whole');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<OrderItem[]>([]);

  const calculatePrice = (drink: DrinkItem) => {
    let price = drink.basePrice;
    
    const sizeOption = sizeOptions.find(s => s.value === size);
    if (sizeOption) price += sizeOption.price;
    
    const milkOption = milkOptions.find(m => m.value === milkType);
    if (milkOption) price += milkOption.price;
    
    selectedToppings.forEach(topping => {
      const toppingOption = toppingOptions.find(t => t.value === topping);
      if (toppingOption) price += toppingOption.price;
    });
    
    return price * quantity;
  };

  const handleToppingToggle = (toppingValue: string) => {
    setSelectedToppings(prev =>
      prev.includes(toppingValue)
        ? prev.filter(t => t !== toppingValue)
        : [...prev, toppingValue]
    );
  };

  const addToCart = () => {
    if (!selectedDrink) return;

    const orderItem: OrderItem = {
      drink: selectedDrink,
      size,
      milkType,
      toppings: selectedToppings,
      quantity,
      totalPrice: calculatePrice(selectedDrink)
    };

    setCart([...cart, orderItem]);
    toast.success(`Added ${quantity}x ${selectedDrink.name} to cart!`);
    
    // Reset customization
    setSelectedDrink(null);
    setSize('medium');
    setMilkType('whole');
    setSelectedToppings([]);
    setQuantity(1);
  };

  const submitOrder = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    toast.success(`Order submitted! Total: $${total.toFixed(2)}`);
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation onNavigate={onNavigate} currentPage="menu" />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4 text-neutral-900">Our Menu</h1>
          <p className="text-xl text-neutral-600">
            Specialty coffee crafted with care, customized just for you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Drink Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl mb-6 text-neutral-900">Choose Your Drink</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {drinks.map((drink) => (
                <Card
                  key={drink.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedDrink?.id === drink.id ? 'ring-2 ring-amber-600' : ''
                  }`}
                  onClick={() => setSelectedDrink(drink)}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-amber-700" />
                      {drink.name}
                    </CardTitle>
                    <CardDescription>{drink.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <span className="text-amber-700">Starting at ${drink.basePrice.toFixed(2)}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Customization Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card>
                <CardHeader>
                  <CardTitle>Customize Your Order</CardTitle>
                  <CardDescription>
                    {selectedDrink ? selectedDrink.name : 'Select a drink to customize'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedDrink && (
                    <>
                      {/* Size Selection */}
                      <div>
                        <Label className="mb-3 block">Size</Label>
                        <RadioGroup value={size} onValueChange={setSize}>
                          {sizeOptions.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={option.value} id={option.value} />
                              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                                {option.name}
                                {option.price > 0 && (
                                  <span className="text-neutral-500 ml-2">
                                    +${option.price.toFixed(2)}
                                  </span>
                                )}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      {/* Milk Type Selection */}
                      <div>
                        <Label className="mb-3 block">Milk Type</Label>
                        <RadioGroup value={milkType} onValueChange={setMilkType}>
                          {milkOptions.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={option.value} id={option.value} />
                              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                                {option.name}
                                {option.price > 0 && (
                                  <span className="text-neutral-500 ml-2">
                                    +${option.price.toFixed(2)}
                                  </span>
                                )}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      {/* Toppings Selection */}
                      <div>
                        <Label className="mb-3 block">Toppings & Add-ons</Label>
                        <div className="space-y-2">
                          {toppingOptions.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <Checkbox
                                id={option.value}
                                checked={selectedToppings.includes(option.value)}
                                onCheckedChange={() => handleToppingToggle(option.value)}
                              />
                              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                                {option.name}
                                <span className="text-neutral-500 ml-2">
                                  +${option.price.toFixed(2)}
                                </span>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div>
                        <Label className="mb-3 block">Quantity</Label>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="text-xl min-w-[3ch] text-center">{quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Price Display */}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg">Total Price:</span>
                          <span className="text-2xl text-amber-700">
                            ${calculatePrice(selectedDrink).toFixed(2)}
                          </span>
                        </div>
                        <Button
                          className="w-full bg-amber-600 hover:bg-amber-700"
                          onClick={addToCart}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </>
                  )}
                  {!selectedDrink && (
                    <div className="text-center text-neutral-500 py-8">
                      <Coffee className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Select a drink to start customizing</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Cart Summary */}
              {cart.length > 0 && (
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                      {cart.map((item, index) => (
                        <div key={index} className="text-sm border-b pb-2">
                          <div className="flex justify-between">
                            <span>
                              {item.quantity}x {item.drink.name}
                            </span>
                            <span className="text-amber-700">
                              ${item.totalPrice.toFixed(2)}
                            </span>
                          </div>
                          <div className="text-neutral-500 text-xs">
                            {sizeOptions.find(s => s.value === item.size)?.name}
                            {' • '}
                            {milkOptions.find(m => m.value === item.milkType)?.name}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-4 pt-2 border-t">
                      <span className="text-lg">Total:</span>
                      <span className="text-xl text-amber-700">
                        ${cartTotal.toFixed(2)}
                      </span>
                    </div>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={submitOrder}
                    >
                      Submit Order
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
