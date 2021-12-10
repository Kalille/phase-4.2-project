class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    validates :first_name, :last_name, :username, presence: true
    validates :password, presence: true, length: {minimum: 8 }
end
