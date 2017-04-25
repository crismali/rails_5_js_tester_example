MagicLamp.fixture do
  order = Order.new(name: nil)
  order.valid?
  render partial: "orders/form", locals: { order: order }
end
