module Main where

main = do
  list <- getContents
  print $ "Contents: " ++ show list
