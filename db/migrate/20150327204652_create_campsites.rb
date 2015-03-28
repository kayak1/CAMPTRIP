class CreateCampsites < ActiveRecord::Migration
  def change
    create_table :campsites do |t|
      t.string :campsite_no

      t.timestamps
    end
  end
end
