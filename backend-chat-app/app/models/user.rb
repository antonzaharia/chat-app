class User < ApplicationRecord
    has_secure_password

    has_many :notifications
    has_many :messages
    has_many :conversations, through: :messages
    
    validates :name, presence: true
    validates :email, presence: true
    validates :password, presence: true
    validates :email, uniqueness: true
end
