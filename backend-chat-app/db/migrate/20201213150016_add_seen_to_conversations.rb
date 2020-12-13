class AddSeenToConversations < ActiveRecord::Migration[6.0]
  def change
    add_column :conversations, :seen, :boolean, default: false
  end
end
