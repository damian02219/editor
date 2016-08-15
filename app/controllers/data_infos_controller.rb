class DataInfosController < ApplicationController
  before_filter :authenticate_user!, except: [:show]
  def index
    @data_infos = @current_user.data_infos
  end

  def new
    @data_info = current_user.data_infos.create(description: "Text Here")
  end

  def edit
    @data_info = DataInfo.find(params[:id])
  end

  def update
    @data_info = DataInfo.find(params[:id])
    if @data_info.update(description: params[:description])
      render json: @data_info and return
    else
      render json: @data_info.errors, status: :unprocessable_entity
    end
  end

  def invite
    @data_info = DataInfo.find(params[:data_info_id])
    @invite = @data_info.data_info_users.find_or_create_by(email: params[:email])
    render json: "SUCCESS"
  end

  def show
    render layout: false
  end

  def destroy
    @data_info = DataInfo.find(params[:id])
    @data_info.destroy
    head :no_content
  end
  private

end
