class CampgroundsController < ApplicationController
	def index
		@campgrounds = Campground.all
	end
	
	def show
		@campground = Campground.friendly.find(params[:id])
	end
	
	def new
		@campground = Campground.new
	end
	
	def edit
		@campground = Campground.friendly.find(params[:id])
	end

	def create
		@campground = Campground.new(campground_params)
 
  		if @campground.save
  			redirect_to @campground
  		else 
  			render 'new'
  		end
	end
	
	def update
		@campground = Campground.friendly.find(params[:id])
 
  		if @campground.update(campground_params)
    		redirect_to @campground
  		else
    		render 'edit'
  		end
	end

	def destroy
		@campground = Campground.friendly.find(params[:id])
  		@campground.destroy
 
  		redirect_to campgrounds_path
	end

	private
	def campground_params
		params.require(:campground).permit(:name, :state, :region1, :region2, :lon, :lat, :elevation, :no_of_sites, :org_name, :phone, :open_date, :close_date, :fee1, :fee2, :day_limit, :scenic_rating, :rugged_rating, :rv_rating, :family_rating, :group_camp, :private_camp)
	end
end
