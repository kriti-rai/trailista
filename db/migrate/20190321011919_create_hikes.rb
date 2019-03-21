class CreateHikes < ActiveRecord::Migration[5.2]
  def change
    create_table :hikes do |t|
      t.string :title
      t.text :overview
      t.string :image
      t.float :length
      t.string :ascent
      t.string :descent
      t.float :ratings
      t.string :difficulty
    end
  end
end
