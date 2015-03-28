class AddSlugToCampgrounds < ActiveRecord::Migration
  def change
    add_column :campgrounds, :slug, :string
  end
end
