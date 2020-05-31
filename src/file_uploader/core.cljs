(ns ^:figwheel-hooks file-uploader.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))


;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:file-el nil}))

(def user-file (atom ""))

(rum/defc button [h txt]
  [:button {:class "success" :on-click h} txt])


(rum/defc file-uploader < rum/reactive  []
  (let [ref (rum/create-ref)]
    [:form {:on-submit (fn [e] (.preventDefault e))}
     [:div nil
      [:input {:ref ref
               :key "file-upload"
               :type "file"
               :name "File Upload"
               :style {:display "none"}
               :on-change (fn [] (let [file (aget (.-files (rum/deref ref)) 0)
                                       filename (.-name file)] (reset! user-file filename)))}]
      (button (fn [] (.click (rum/deref ref))) "Upload file")]]))



(rum/defc upload-form []
  [:form nil [:div (file-uploader)]])


(rum/defc app < rum/reactive []
  [:div {:class "container"} [:div {:class "header"} "File Uploader"]
   [:div {:class "content"} (rum/react user-file)]
   [:div {:class "footer"} (file-uploader)]])


(defn get-app-element []
  (rum/mount (app) (gdom/getElement "app")))

(get-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! app-state update-in [:__figwheel_counter] inc))
