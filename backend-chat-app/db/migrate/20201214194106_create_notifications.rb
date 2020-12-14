class CreateNotifications < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|
      t.string :type
      t.boolean :seen
      t.integer :user_id

      t.timestamps
    end
  end
end
