class ListsController < ApplicationController
 before_action :set_list, only: [:show, :destroy]

 # GET /lists
  def index
    @lists = List.all
    @movies = Movie.all
  end

  # GET /lists/1
  def show
    @bookmark = Bookmark.new
    @movies = Movie.all
  end

  # GET /lists/new
  def new
    @list = List.new
  end

  # POST /lists
  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to list_path(@list), notice: 'List was successfully created.'
    else
      render :new
    end
  end

  def destroy
    @list.destroy
    redirect_to lists_path, notice: 'List was successfully destroyed.'
  end

  private

  def set_list
    @list = List.find(params[:id])
  end

  def list_params
    params.require(:list).permit(:name, :photo)
  end
end
