class DataInfosController < ApplicationController
  before_filter :authenticate_user!, except: [:show]
  def index
    @data_infos = @current_user.data_infos
  end

  def create
    @data_info = DataInfo.new(record_params)
    if @data_info.save
      render json: @data_info
    else
      render json: @data_info.errors, status: :unprocessable_entity
    end
  end

  def edit
    @data_info = DataInfo.find(params[:id])
  end

  def update
    @data_info = DataInfo.find(params[:id])
    if @data_info.update(record_params)
      render json: @data_info
    else
      render json: @data_info.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @data_info = DataInfo.find(params[:id])
    @data_info.destroy
    head :no_content
  end
  private
    def record_params
      params.require(:record).permit(:date, :title, :amount)
    end
end
