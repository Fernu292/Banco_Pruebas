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
#include <QPushButton>
#include <QCoreApplication>
#include <QTimer>
#include <utility>
#include "../Components/LinearChart.h"


class MainWindow : public QMainWindow {
private:
    int width, height;
    std::string title;
    int time;
    bool isInit;
    QTimer *timer{};
public:

     MainWindow(int w, int h, std::string title) :
     width(w), height(h), title(std::move(title)),
     isInit(false),time(0)
     {
        this->setMinimumSize(this->width, this->height);
        this->setMaximumSize(this->width, this->height);
        this->setWindowTitle(QString::fromStdString(this->title));
        this->setStyle();

        this->checkIsInit();
     }

    ~MainWindow() override {
        std::cout<<"Finalizando aplicación..."<<std::endl;
    }

    void Resize(int w, int h);
    void setStyle();

    // Functionalities
    void setTime(QWidget& parent, QLabel& title, LinearChart& linearChart);
    void checkIsInit();
    // Getters and Setters
    std::string getTitle();
    void setTitle(std::string wTitle);

public slots:
    void closeWindow();
};


#endif //BANCO_PRUEBAS_MAINWINDOW_H
