class AddCampgroundIdToCampsites < ActiveRecord::Migration
  def change
    add_column :campsites, :campground_id, :integer
  end
end
