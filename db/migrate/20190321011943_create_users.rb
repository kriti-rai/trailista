class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :password_digest
      t.string :username
      t.string :image
      t.string :location
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
  end
end
