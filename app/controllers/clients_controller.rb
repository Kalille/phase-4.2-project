class ClientsController < ApplicationController
    def create
       
        #    Client = Client.create!(Client_params)       
            client = Client.create(first_name: params[:first_name], last_name: params[:last_name], password: params[:password],username: params[:username])
        
            if client.valid? 
            render json: client, status: :created
            else 
                render json: {errors: client.errors.full_messages}
            end
          end 
      
          def index
            render json: Client.all, except: [:created_at,:updated_at]
      
          end
      
          def show 
              client = client_id_params 
      
        #   client = Client.find_by(id: params[:id])
            render json: client
          end

          def destroy
            client = client_id_params
            client.destroy
           
          end

          def update
        
            client = client_id_params
            client.update(first_name: params[:first_name], last_name: params[:last_name], password: params[:password],username: params[:username])
            if client

            render json: client
            else 
                render json: {errors: client.errors.full_messages}
            end
          end
      
          private
            def client_id_params
              @client = Client.find_by(id: params[:id])
            end
      
          def client_params
           
            params.require(:client).permit(:first_name, :last_name, :password, :username)
          end
end
