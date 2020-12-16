class Conversation < ApplicationRecord
    has_many :messages
    has_many :users, through: :messages
    has_many :notifications

end
