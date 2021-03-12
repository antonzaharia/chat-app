require 'rails_helper'
require 'pry'

RSpec.describe "Conversations", type: :request do
  describe "GET /conversations" do
    it "works! (now write some real specs)" do
      user = User.create(name: "test", email: "test231@test.com", password: "password")
      get "/users/#{user.id}/conversations"
      expect(response).to have_http_status(200)
    end
  end
  describe "" do
    let(:user1) {User.create(name: "test1", email: "test231@test.com", password: "password")}
    let(:user2) {User.create(name: "test2", email: "test232@test.com", password: "password")}
    let(:conversation) { Conversation.create}
    let(:message) {Message.create(content: "test", user: user1, conversation: conversation)}
    
    it "should create a conversation" do
      get "/users/#{user1.id}/conversations"
      binding.pry
      expect(response).to have_http_status(200)
    end
  end
end
