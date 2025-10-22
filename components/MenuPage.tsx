import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Plus, Minus } from 'lucide-react';
import { OrderForm } from './OrderForm';

interface DrinkOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: 'hot' | 'iced' | 'specialty';
}

interface OrderItem {
  drink: DrinkOption;
  size: 'small' | 'medium' | 'large';
  milkType: 'whole' | 'skim' | 'oat' | 'almond' | 'none';
  toppings: string[];
  quantity: number;
}

const drinks: DrinkOption[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich and bold, our signature espresso shot',
    basePrice: 3.50,
    category: 'hot',
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso with hot water for a smooth, bold flavor',
    basePrice: 4.00,
    category: 'hot',
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Creamy espresso with steamed milk',
    basePrice: 5.00,
    category: 'hot',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso with equal parts steamed milk and foam',
    basePrice: 5.00,
    category: 'hot',
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Rich chocolate blended with espresso and steamed milk',
    basePrice: 5.50,
    category: 'hot',
  },
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    description: 'Cold brewed coffee served over ice',
    basePrice: 4.50,
    category: 'iced',
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Espresso with cold milk over ice',
    basePrice: 5.50,
    category: 'iced',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Smooth, less acidic coffee steeped for 24 hours',
    basePrice: 5.00,
    category: 'iced',
  },
  {
    id: 'pup-cup',
    name: 'Pup Cup',
    description: 'Whipped cream treat for your furry friend (free!)',
    basePrice: 0,
    category: 'specialty',
  },
  {
    id: 'puppy-latte',
    name: 'Puppuccino Latte',
    description: 'Human latte + complimentary pup cup',
    basePrice: 6.00,
    category: 'specialty',
  },
];

const sizeMultipliers = {
  small: 1.0,
  medium: 1.3,
  large: 1.6,
};

const milkPrices = {
  whole: 0,
  skim: 0,
  oat: 0.75,
  almond: 0.75,
  none: 0,
};

const toppingOptions = [
  { id: 'whipped-cream', name: 'Whipped Cream', price: 0.50 },
  { id: 'caramel-drizzle', name: 'Caramel Drizzle', price: 0.75 },
  { id: 'chocolate-syrup', name: 'Chocolate Syrup', price: 0.75 },
  { id: 'vanilla-syrup', name: 'Vanilla Syrup', price: 0.50 },
  { id: 'hazelnut-syrup', name: 'Hazelnut Syrup', price: 0.50 },
  { id: 'cinnamon', name: 'Cinnamon', price: 0.25 },
  { id: 'extra-shot', name: 'Extra Espresso Shot', price: 1.00 },
];

export function MenuPage() {
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const calculateItemPrice = (item: OrderItem): number => {
    const sizePrice = item.drink.basePrice * sizeMultipliers[item.size];
    const milkPrice = milkPrices[item.milkType];
    const toppingsPrice = item.toppings.reduce((sum, toppingId) => {
      const topping = toppingOptions.find(t => t.id === toppingId);
      return sum + (topping?.price || 0);
    }, 0);
    return (sizePrice + milkPrice + toppingsPrice) * item.quantity;
  };

  const calculateTotal = (): number => {
    return cart.reduce((sum, item) => sum + calculateItemPrice(item), 0);
  };

  const addToCart = (
    drink: DrinkOption,
    size: 'small' | 'medium' | 'large',
    milkType: 'whole' | 'skim' | 'oat' | 'almond' | 'none',
    toppings: string[]
  ) => {
    const existingItemIndex = cart.findIndex(
      item =>
        item.drink.id === drink.id &&
        item.size === size &&
        item.milkType === milkType &&
        JSON.stringify(item.toppings.sort()) === JSON.stringify(toppings.sort())
    );

    if (existingItemIndex !== -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { drink, size, milkType, toppings, quantity: 1 }]);
    }
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, delta: number) => {
    const newCart = [...cart];
    newCart[index].quantity = Math.max(1, newCart[index].quantity + delta);
    setCart(newCart);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2">Our Menu</h1>
          <p className="text-gray-600">
            Crafted with care, enjoyed with friends (furry and otherwise)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hot Drinks */}
            <section>
              <h2 className="mb-4">Hot Drinks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drinks
                  .filter(drink => drink.category === 'hot')
                  .map(drink => (
                    <DrinkCard
                      key={drink.id}
                      drink={drink}
                      onAddToCart={addToCart}
                    />
                  ))}
              </div>
            </section>

            {/* Iced Drinks */}
            <section>
              <h2 className="mb-4">Iced Drinks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drinks
                  .filter(drink => drink.category === 'iced')
                  .map(drink => (
                    <DrinkCard
                      key={drink.id}
                      drink={drink}
                      onAddToCart={addToCart}
                    />
                  ))}
              </div>
            </section>

            {/* Specialty */}
            <section>
              <h2 className="mb-4">Specialty & Pup Treats</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drinks
                  .filter(drink => drink.category === 'specialty')
                  .map(drink => (
                    <DrinkCard
                      key={drink.id}
                      drink={drink}
                      onAddToCart={addToCart}
                    />
                  ))}
              </div>
            </section>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card>
                <CardHeader>
                  <CardTitle>Your Order</CardTitle>
                  <CardDescription>
                    {cart.length === 0 ? 'Your cart is empty' : `${cart.length} item(s)`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                      Add items to get started
                    </p>
                  ) : (
                    <>
                      <div className="space-y-4 mb-4">
                        {cart.map((item, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <p>{item.drink.name}</p>
                                <div className="flex gap-2 mt-1 flex-wrap">
                                  <Badge variant="secondary" className="text-xs">
                                    {item.size}
                                  </Badge>
                                  {item.milkType !== 'none' && (
                                    <Badge variant="outline" className="text-xs">
                                      {item.milkType}
                                    </Badge>
                                  )}
                                </div>
                                {item.toppings.length > 0 && (
                                  <p className="text-sm text-gray-600 mt-1">
                                    +{' '}
                                    {item.toppings
                                      .map(
                                        id =>
                                          toppingOptions.find(t => t.id === id)?.name
                                      )
                                      .join(', ')}
                                  </p>
                                )}
                              </div>
                              <p className="font-medium">
                                ${calculateItemPrice(item).toFixed(2)}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(index, -1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(index, 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => removeFromCart(index)}
                                className="ml-auto"
                              >
                                Remove
                              </Button>
                            </div>
                            <Separator />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center mb-4 pt-4 border-t-2">
                        <span>Total</span>
                        <span>${calculateTotal().toFixed(2)}</span>
                      </div>
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => setShowOrderForm(true)}
                      >
                        Place Order
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Order Form Dialog */}
      {showOrderForm && (
        <OrderForm
          cart={cart}
          total={calculateTotal()}
          onClose={() => setShowOrderForm(false)}
          onSubmit={() => {
            setCart([]);
            setShowOrderForm(false);
          }}
        />
      )}
    </div>
  );
}

interface DrinkCardProps {
  drink: DrinkOption;
  onAddToCart: (
    drink: DrinkOption,
    size: 'small' | 'medium' | 'large',
    milkType: 'whole' | 'skim' | 'oat' | 'almond' | 'none',
    toppings: string[]
  ) => void;
}

function DrinkCard({ drink, onAddToCart }: DrinkCardProps) {
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [milkType, setMilkType] = useState<'whole' | 'skim' | 'oat' | 'almond' | 'none'>('whole');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const calculatePrice = (): number => {
    const sizePrice = drink.basePrice * sizeMultipliers[size];
    const milkPrice = milkPrices[milkType];
    const toppingsPrice = selectedToppings.reduce((sum, toppingId) => {
      const topping = toppingOptions.find(t => t.id === toppingId);
      return sum + (topping?.price || 0);
    }, 0);
    return sizePrice + milkPrice + toppingsPrice;
  };

  const toggleTopping = (toppingId: string) => {
    setSelectedToppings(prev =>
      prev.includes(toppingId)
        ? prev.filter(id => id !== toppingId)
        : [...prev, toppingId]
    );
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{drink.name}</span>
          <Badge variant="secondary">${calculatePrice().toFixed(2)}</Badge>
        </CardTitle>
        <CardDescription>{drink.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        {/* Size Selection */}
        {drink.basePrice > 0 && (
          <div>
            <label className="text-sm font-medium mb-2 block">Size</label>
            <div className="flex gap-2">
              {(['small', 'medium', 'large'] as const).map(s => (
                <Button
                  key={s}
                  size="sm"
                  variant={size === s ? 'default' : 'outline'}
                  onClick={() => setSize(s)}
                  className="flex-1 capitalize"
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Milk Type Selection */}
        {drink.category !== 'specialty' && drink.id !== 'espresso' && (
          <div>
            <label className="text-sm font-medium mb-2 block">Milk</label>
            <div className="grid grid-cols-2 gap-2">
              {(['whole', 'skim', 'oat', 'almond'] as const).map(milk => (
                <Button
                  key={milk}
                  size="sm"
                  variant={milkType === milk ? 'default' : 'outline'}
                  onClick={() => setMilkType(milk)}
                  className="capitalize"
                >
                  {milk}
                  {milkPrices[milk] > 0 && ` +$${milkPrices[milk].toFixed(2)}`}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Toppings */}
        {drink.basePrice > 0 && drink.id !== 'pup-cup' && (
          <div>
            <label className="text-sm font-medium mb-2 block">
              Add-ons (optional)
            </label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {toppingOptions.map(topping => (
                <label
                  key={topping.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedToppings.includes(topping.id)}
                    onChange={() => toggleTopping(topping.id)}
                    className="rounded"
                  />
                  <span className="text-sm flex-1">{topping.name}</span>
                  <span className="text-sm text-gray-600">
                    +${topping.price.toFixed(2)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        <Button
          className="w-full"
          onClick={() => onAddToCart(drink, size, milkType, selectedToppings)}
        >
          Add to Order
        </Button>
      </CardContent>
    </Card>
  );
}
