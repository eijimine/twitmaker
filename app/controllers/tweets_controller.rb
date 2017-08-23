class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save


    respond_to do |format|
      format.html
      format.json do
        @response = {"message"=>@tweet.message, "created_at"=>@tweet.created_at}
        render json: @response
        end
      end

    end
  end



  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
