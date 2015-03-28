class AddIndexInMyTable < ActiveRecord::Migration
  def up
    	add_index :campgrounds, :slug, :unique => true
  	end

  	def down
  	end
end
