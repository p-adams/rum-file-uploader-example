(ns ^:figwheel-hooks file-uploader.core
  (:require
   [goog.dom :as gdom]
   [rum.core :as rum]))

(defonce user-file (atom {:name ""
                          :size 0
                          :last-modified 0}))

(rum/defc file-uploader < rum/reactive  []
  (let [ref (rum/create-ref)]
    [:form {:on-submit (fn [e] (.preventDefault e))}
     [:div nil
      [:input
       {:ref ref
        :key "file-upload"
        :type "file"
        :name "File Upload"
        :style {:display "none"}
        :on-change (fn []
                     (let [file (aget (.-files (rum/deref ref)) 0)]
                       (reset! user-file file)))}]
      [:button
       {:class "success"
        :on-click (fn [] (.click (rum/deref ref)))}
       "Upload file"]]]))


(rum/defc file-item [f]
  [:div {:class "file-item-container"}
   [:div nil (.-name f)]
   [:div nil (.-size f)]
   [:div nil (.-lastModified f)]])


(rum/defc app < rum/reactive []
  [:div {:class "container"} [:div {:class "header"} "File Uploader"]
   [:div {:class "content"} (file-item (rum/react user-file))]
   [:div {:class "footer"} (file-uploader)]])


(defn get-app-element []
  (rum/mount (app) (gdom/getElement "app")))

(get-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! user-file update-in [:__figwheel_counter] inc))
