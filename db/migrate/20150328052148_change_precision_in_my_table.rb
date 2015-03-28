class ChangePrecisionInMyTable < ActiveRecord::Migration
  	def up
    	change_column :campgrounds, :fee1, :decimal, :precision => 10, :scale => 2
    	change_column :campgrounds, :fee2, :decimal, :precision => 10, :scale => 2
    	change_column :campgrounds, :scenic_rating, :decimal, :precision => 10, :scale => 1
    	change_column :campgrounds, :rugged_rating, :decimal, :precision => 10, :scale => 1
    	change_column :campgrounds, :rv_rating, :decimal, :precision => 10, :scale => 1
    	change_column :campgrounds, :family_rating, :decimal, :precision => 10, :scale => 1
  	end

  	def down
    	change_column :campgrounds, :fee1, :decimal
    	change_column :campgrounds, :fee2, :decimal
    	change_column :campgrounds, :scenic_rating, :decimal
    	change_column :campgrounds, :rugged_rating, :decimal
    	change_column :campgrounds, :rv_rating, :decimal
    	change_column :campgrounds, :family_rating, :decimal
  	end
end
