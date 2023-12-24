//
// Created by fernu on 12/23/23.
//

#ifndef BANCO_PRUEBAS_MAINWINDOW_H
#define BANCO_PRUEBAS_MAINWINDOW_H

#include <QMainWindow>
#include <iostream>
#include <string>
#include <utility>
#include <QString>
#include <QWidget>
#include <QLabel>

class MainWindow : public QMainWindow {
private:
    int width, height;
    std::string title;
public:

    MainWindow(int w, int h, std::string title) : width(w), height(h), title(std::move(title)) {
        this->setMinimumSize(this->width, this->height);
        this->setMaximumSize(this->width, this->height);
        this->setWindowTitle(QString::fromStdString(this->title));

        std::cout<<"El ancho es: "<<this->width<<std::endl;
        std::cout<<"El alto es: "<<this->height<<std::endl;

        this->setStyle();


    }

    ~MainWindow() override {
        std::cout<<"Finalizando aplicación..."<<std::endl;
    }

    void Resize(float w, float h);
    void setStyle();

    // Getters and Setters

    std::string getTitle();
    void setTitle(std::string title);

};


#endif //BANCO_PRUEBAS_MAINWINDOW_H
