require 'oauth'
require 'json'
require 'net/http'
require 'httparty'
require 'time_diff'

canvas_token ="1~Hh9CLrLb8Sl9WqajNedHYYxvyqrhcQXnlui3hjjFjleviQcEzFx2VE2yMkHNFR6e"
baseurl="https://canvas.instructure.com/api/v1/"
path="courses"
address=URI("#{baseurl}#{path}")
response = HTTParty.get("#{address}?access_token=#{canvas_token}&state=available")
other = HTTParty.get("#{address}?access_token=#{canvas_token}&state=unpublished")
first= JSON.parse(response.body)
more= JSON.parse(other.body)
classes=first+more
classes.each do |i|
if (i["start_at"])==nil || Time.parse(i["start_at"]).to_i-Time.now.to_i>-525600*60
puts i["name"]
end

end


