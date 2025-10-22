import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';

interface OrderFormProps {
  cart: any[];
  total: number;
  onClose: () => void;
  onSubmit: () => void;
}

export function OrderForm({ cart, total, onClose, onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupTime: '',
    specialInstructions: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate order submission
    toast.success('Order placed successfully! We\'ll have it ready for you soon.');
    onSubmit();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2>Complete Your Order</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close order form"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Order Summary */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="mb-3">Order Summary</h3>
            <div className="space-y-2 mb-3">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>
                    {item.quantity}x {item.drink.name} ({item.size})
                  </span>
                  <span>
                    $
                    {(
                      (item.drink.basePrice *
                        (item.size === 'small' ? 1 : item.size === 'medium' ? 1.3 : 1.6) +
                        (item.milkType === 'oat' || item.milkType === 'almond' ? 0.75 : 0)) *
                      item.quantity
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between pt-3 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Order Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pickupTime">Preferred Pickup Time (optional)</Label>
              <Input
                id="pickupTime"
                name="pickupTime"
                type="time"
                value={formData.pickupTime}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialInstructions">
                Special Instructions (optional)
              </Label>
              <Textarea
                id="specialInstructions"
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                placeholder="Any special requests or dietary restrictions..."
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Place Order (${total.toFixed(2)})
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}
