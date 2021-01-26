const database = require('./db')

class Controlador {
	novaTarefa(request, response){
		const {tarefa, descricao, flag} = request.body
		
		//console.log( tarefa, descricao, flag )
		
		database.insert({tarefa,descricao,flag}).table("tarefas").then(data=>{
			//console.log(data)
			//response.json({message:"Tarefa criada com sucesso!"})
			response.json({id:data,tarefa:tarefa,descricao:descricao})
		}).catch(error=>{
			console.log(error)
		})
	}
	
	listarTarefas(request, response){
		database.select("*").table("tarefas").then(tarefas=>{
			//console.log(tarefas)
			response.json(tarefas)
		}).catch(error=>{
			console.log(error)
		})
	}
	
	dadosTarefa(request, response){
		const id = request.params.id
		
		database.select("*").table("tarefas").where({id:id}).then(tarefa=>{
			//console.log(tarefa)
			response.json(tarefa)
		}).catch(error=>{
			console.log(error)
		})
	}
	
	alterarTarefa(request, response){
		const id = request.params.id
		const {descricao} = request.body
		
		database.where({id:id}).update({descricao:descricao}).table("tarefas").then(data=>{
			//console.log(data)
			//response.json({message:"Tarefa alterada com sucesso!"})
			database.select("*").table("tarefas").where({id:id}).then(tarefa=>{
				//console.log(tarefa)
				response.json(tarefa)
			}).catch(error=>{
				console.log(error)
			})
			
		}).catch(error=>{
			console.log(error)
		})
	}
	
	marcarTarefa(request, response){
		const id = request.params.id
		const {flag} = request.body
		
		database.where({id:id}).update({flag:flag}).table("tarefas").then(data=>{
			//console.log(data)
			//response.json({message:"Tarefa alterada com sucesso!"})
			
			//response.json({id:id,tarefa:tarefa,descricao:descricao,flag:flag})
			database.select("*").table("tarefas").where({id:id}).then(tarefa=>{
				//console.log(tarefa)
				response.json(tarefa)
			}).catch(error=>{
				console.log(error)
			})
			
			//response.json({id:id})
			
		}).catch(error=>{
			console.log(error)
		})
	}
	
	excluirTarefa(request, response){
		const id = request.params.id
		
		database.where({id:id}).del().table("tarefas").then(data=>{
			//console.log(data)
			response.json({message:"Tarefa excluída com sucesso!"})
		}).catch(error=>{
			console.log(error)
		})
	}
}

module.exports = new Controlador()