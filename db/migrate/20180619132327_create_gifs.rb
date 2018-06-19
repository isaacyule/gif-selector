class CreateGifs < ActiveRecord::Migration[5.1]
  def change
    create_table :gifs do |t|
      t.string :src

      t.timestamps
    end
  end
end
