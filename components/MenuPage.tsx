import { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { toast } from 'sonner@2.0.3';

interface DrinkOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

interface Size {
  id: string;
  name: string;
  priceModifier: number;
}

interface MilkType {
  id: string;
  name: string;
  priceModifier: number;
}

interface Topping {
  id: string;
  name: string;
  price: number;
}

interface OrderItem {
  drink: DrinkOption;
  size: Size;
  milkType: MilkType;
  toppings: Topping[];
  quantity: number;
  totalPrice: number;
}

export function MenuPage() {
  const [selectedDrink, setSelectedDrink] = useState<DrinkOption | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size>(sizes[0]);
  const [selectedMilkType, setSelectedMilkType] = useState<MilkType>(milkTypes[0]);
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [cart, setCart] = useState<OrderItem[]>([]);

  const drinks: DrinkOption[] = [
    {
      id: 'espresso',
      name: 'Espresso',
      basePrice: 3.5,
      description: 'Rich and bold single or double shot',
    },
    {
      id: 'latte',
      name: 'Latte',
      basePrice: 4.5,
      description: 'Smooth espresso with steamed milk',
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      basePrice: 4.5,
      description: 'Espresso with equal parts steamed milk and foam',
    },
    {
      id: 'americano',
      name: 'Americano',
      basePrice: 3.75,
      description: 'Espresso diluted with hot water',
    },
    {
      id: 'mocha',
      name: 'Mocha',
      basePrice: 5.0,
      description: 'Chocolate and espresso with steamed milk',
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew',
      basePrice: 4.25,
      description: 'Smooth, cold-steeped coffee',
    },
    {
      id: 'matcha-latte',
      name: 'Matcha Latte',
      basePrice: 5.25,
      description: 'Premium matcha with steamed milk',
    },
    {
      id: 'chai-latte',
      name: 'Chai Latte',
      basePrice: 4.75,
      description: 'Spiced tea with steamed milk',
    },
  ];

  const calculatePrice = () => {
    if (!selectedDrink) return 0;
    
    const drinkPrice = selectedDrink.basePrice;
    const sizePrice = selectedSize.priceModifier;
    const milkPrice = selectedMilkType.priceModifier;
    const toppingsPrice = selectedToppings.reduce((sum, topping) => sum + topping.price, 0);
    
    return drinkPrice + sizePrice + milkPrice + toppingsPrice;
  };

  const handleToppingToggle = (topping: Topping) => {
    setSelectedToppings((prev) =>
      prev.find((t) => t.id === topping.id)
        ? prev.filter((t) => t.id !== topping.id)
        : [...prev, topping]
    );
  };

  const addToCart = () => {
    if (!selectedDrink) {
      toast.error('Please select a drink');
      return;
    }

    const existingItemIndex = cart.findIndex(
      (item) =>
        item.drink.id === selectedDrink.id &&
        item.size.id === selectedSize.id &&
        item.milkType.id === selectedMilkType.id &&
        JSON.stringify(item.toppings.map(t => t.id).sort()) === 
        JSON.stringify(selectedToppings.map(t => t.id).sort())
    );

    if (existingItemIndex !== -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
      newCart[existingItemIndex].totalPrice = calculatePrice() * newCart[existingItemIndex].quantity;
      setCart(newCart);
    } else {
      const newItem: OrderItem = {
        drink: selectedDrink,
        size: selectedSize,
        milkType: selectedMilkType,
        toppings: [...selectedToppings],
        quantity: 1,
        totalPrice: calculatePrice(),
      };
      setCart([...cart, newItem]);
    }

    toast.success(`${selectedDrink.name} added to cart!`);
  };

  const updateQuantity = (index: number, change: number) => {
    const newCart = [...cart];
    newCart[index].quantity += change;
    
    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1);
    } else {
      const basePrice = 
        newCart[index].drink.basePrice +
        newCart[index].size.priceModifier +
        newCart[index].milkType.priceModifier +
        newCart[index].toppings.reduce((sum, t) => sum + t.price, 0);
      newCart[index].totalPrice = basePrice * newCart[index].quantity;
    }
    
    setCart(newCart);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const handleSubmitOrder = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    toast.success('Order submitted successfully! We\'ll have it ready for you soon.');
    setCart([]);
    setSelectedDrink(null);
    setSelectedToppings([]);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="mb-4">Our Menu</h1>
        <p className="text-lg text-muted-foreground">
          Handcrafted beverages made with love for you and your furry friend
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Menu Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Drink Selection */}
          <section>
            <h2 className="mb-6">Choose Your Drink</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {drinks.map((drink) => (
                <Card
                  key={drink.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedDrink?.id === drink.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedDrink(drink)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{drink.name}</CardTitle>
                      <Badge variant="secondary">${drink.basePrice.toFixed(2)}</Badge>
                    </div>
                    <CardDescription>{drink.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Customization Options */}
          {selectedDrink && (
            <section className="space-y-6">
              <h2>Customize Your Order</h2>

              {/* Size Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedSize.id}
                    onValueChange={(value) => {
                      const size = sizes.find((s) => s.id === value);
                      if (size) setSelectedSize(size);
                    }}
                  >
                    {sizes.map((size) => (
                      <div key={size.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={size.id} id={size.id} />
                          <Label htmlFor={size.id} className="cursor-pointer">
                            {size.name}
                          </Label>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {size.priceModifier > 0 ? `+$${size.priceModifier.toFixed(2)}` : 'Base'}
                        </span>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Milk Type Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Milk Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedMilkType.id}
                    onValueChange={(value) => {
                      const milk = milkTypes.find((m) => m.id === value);
                      if (milk) setSelectedMilkType(milk);
                    }}
                  >
                    {milkTypes.map((milk) => (
                      <div key={milk.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={milk.id} id={milk.id} />
                          <Label htmlFor={milk.id} className="cursor-pointer">
                            {milk.name}
                          </Label>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {milk.priceModifier > 0 ? `+$${milk.priceModifier.toFixed(2)}` : 'Included'}
                        </span>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Toppings Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Add-ons & Toppings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {toppings.map((topping) => (
                      <div key={topping.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={topping.id}
                            checked={selectedToppings.some((t) => t.id === topping.id)}
                            onCheckedChange={() => handleToppingToggle(topping)}
                          />
                          <Label htmlFor={topping.id} className="cursor-pointer">
                            {topping.name}
                          </Label>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          +${topping.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Add to Cart Button */}
              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span>Current Price:</span>
                    <span className="text-2xl">${calculatePrice().toFixed(2)}</span>
                  </div>
                  <Button onClick={addToCart} className="w-full" size="lg">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}
        </div>

        {/* Cart Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle>Your Order</CardTitle>
                <CardDescription>
                  {cart.length === 0 ? 'Your cart is empty' : `${cart.length} item(s) in cart`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {cart.length > 0 ? (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p>{item.drink.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.size.name}, {item.milkType.name}
                            </p>
                            {item.toppings.length > 0 && (
                              <p className="text-sm text-muted-foreground">
                                + {item.toppings.map((t) => t.name).join(', ')}
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p>${item.totalPrice.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(index, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(index, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        {index < cart.length - 1 && <Separator />}
                      </div>
                    ))}

                    <Separator className="my-4" />

                    <div className="flex justify-between items-center">
                      <span>Total:</span>
                      <span className="text-2xl">${getCartTotal().toFixed(2)}</span>
                    </div>

                    <Button onClick={handleSubmitOrder} className="w-full" size="lg">
                      Submit Order
                    </Button>
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    Select a drink to get started
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Constants
const sizes: Size[] = [
  { id: 'small', name: 'Small (8oz)', priceModifier: 0 },
  { id: 'medium', name: 'Medium (12oz)', priceModifier: 0.5 },
  { id: 'large', name: 'Large (16oz)', priceModifier: 1.0 },
];

const milkTypes: MilkType[] = [
  { id: 'whole', name: 'Whole Milk', priceModifier: 0 },
  { id: '2percent', name: '2% Milk', priceModifier: 0 },
  { id: 'oat', name: 'Oat Milk', priceModifier: 0.75 },
  { id: 'almond', name: 'Almond Milk', priceModifier: 0.75 },
  { id: 'soy', name: 'Soy Milk', priceModifier: 0.75 },
  { id: 'coconut', name: 'Coconut Milk', priceModifier: 0.75 },
];

const toppings: Topping[] = [
  { id: 'extra-shot', name: 'Extra Shot', price: 1.0 },
  { id: 'whipped-cream', name: 'Whipped Cream', price: 0.5 },
  { id: 'caramel', name: 'Caramel Drizzle', price: 0.5 },
  { id: 'chocolate', name: 'Chocolate Drizzle', price: 0.5 },
  { id: 'vanilla', name: 'Vanilla Syrup', price: 0.5 },
  { id: 'hazelnut', name: 'Hazelnut Syrup', price: 0.5 },
];
