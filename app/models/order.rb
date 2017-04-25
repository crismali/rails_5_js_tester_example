class Order < ApplicationRecord
  validates :name, presence: true
end
