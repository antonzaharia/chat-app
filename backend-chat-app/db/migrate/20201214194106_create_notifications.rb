class CreateNotifications < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|
      t.boolean :seen, default: false
      t.string :content
      t.integer :user_id

      t.timestamps
    end
  end
end
