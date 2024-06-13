require 'webrick'

server = WEBrick::HTTPServer.new :Port => 80

server.mount_proc '/' do |req, res|
    res.body = 'Hello Pritam!! From Ruby'
end

trap 'INT' do
    server.shutdown
end

server.start
