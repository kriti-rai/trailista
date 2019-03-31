class CreateHikesUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :hikes_users do |t|
      t.integer :user_id
      t.integer :hike_id
    end
  end
end
