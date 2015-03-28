class ChangeLatlonFormatInMyTable < ActiveRecord::Migration
  	def up
    	change_column :campgrounds, :lon, :decimal, :precision => 15, :scale => 10
    	change_column :campgrounds, :lat, :decimal, :precision => 15, :scale => 10
  	end

  	def down
    	change_column :campgrounds, :lon, :decimal
    	change_column :campgrounds, :lat, :decimal
  	end
end
