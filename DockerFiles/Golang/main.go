package main

import (
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "index.html")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":2000", nil)
}

