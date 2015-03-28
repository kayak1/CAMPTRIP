class CreateCampgrounds < ActiveRecord::Migration
  def change
    create_table :campgrounds do |t|
      t.string :name
      t.string :state
      t.string :region1
      t.string :region2
      t.decimal :lon
      t.decimal :lat
      t.integer :elevation
      t.integer :no_of_sites
      t.string :org_name
      t.string :phone
      t.date :open_date
      t.date :close_date
      t.decimal :fee1
      t.decimal :fee2
      t.integer :day_limit
      t.decimal :scenic_rating
      t.decimal :rugged_rating
      t.decimal :rv_rating
      t.decimal :family_rating
      t.boolean :group_camp
      t.boolean :private_camp

      t.timestamps
    end
  end
end
