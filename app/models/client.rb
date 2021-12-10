class Client < ApplicationRecord
    has_secure_password
    has_many :reviews
    validates :first_name, :last_name, :username, presence: true
    validates :username, uniqueness: true
    validates :password, uniqueness: true, presence: true, length: {minimum: 8 }
end
