class Campground < ActiveRecord::Base
	has_many :campsites, dependent: :destroy
	validates :name, presence: true, length: { minimum: 5 }
	validates :state, presence: true
	validates :region1, presence: true
	validates :region2, presence: true
	validates :lon, presence: true, numericality: true
	validates :lat, presence: true, numericality: true
	validates :elevation, presence: true, numericality: { only_integer: true }
	
	extend FriendlyId
  	friendly_id :slug_candidates, use: :slugged
  	def slug_candidates
    	[
      	[:name, :state]
    	]
  	end
  	def should_generate_new_friendly_id?
  		name_changed?
	end
end
