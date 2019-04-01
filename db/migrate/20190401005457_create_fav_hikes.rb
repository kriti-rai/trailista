class CreateFavHikes < ActiveRecord::Migration[5.2]
  def change
    create_table :fav_hikes do |t|
      t.integer :hike_id
      t.integer :user_id
    end
  end
end
