class HomeController < ApplicationController
  before_filter :authenticate_user!, except: [:show]
  def index
    @data = @current_user.all_data_info
  end

  def show
    @data = DataInfo.find(params[:id])
  end

  def update_data
  end
end
