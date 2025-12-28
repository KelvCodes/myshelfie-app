import { databases } from "@/lib/appwrite";
import { createContext, useState } from "react";
import { ID } from "react-native-appwrite";

const DATABASE_ID = "6848525c0012328c1d0e";
const COLLECTION_ID = "68485273002f03dd1600";

export const BooksContext = createContext()

export function BooksProvider({children}){
    const [ books, setBooks ] = useState([])

    async function fetchBooks(){
        try{

        }catch (error){
            console.log(error.message)
        }
    }

    async function fetchBookById(id){
        try{

        }catch(error){
              console.log(error.message)
         }
     }

      async function createBook(data){
        try{
            const newBoook = await databases.createDocument(
              DATABASE_ID ,
              COLLECTION_ID ,
              ID.unique(),
            )
        }catch(error){
              console.log(error.message)
         }
    }

    async function deleteBook(id){
         try{

        }catch(error){
              console.log(error.message)
         }
    }

    return(
        <BooksContext.Provider
        value = {{ books, fetchBooks, fetchBookById, deleteBook }}
        >
            
        {children}
        </BooksContext.Provider>
    )
}
