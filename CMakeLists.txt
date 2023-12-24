cmake_minimum_required(VERSION 3.5)

project(Banco_Pruebas
        VERSION 1.0
        DESCRIPTION "Banco de pruebas para motores Antares Aerospace"
        LANGUAGES CXX
)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

find_package(Qt6 COMPONENTS Core Gui Widgets Charts REQUIRED)
find_package(Matplot++ REQUIRED)

add_executable(Banco_Pruebas
    main.cpp
)

target_link_libraries(Banco_Pruebas PUBLIC 
                    Qt6::Widgets
                    Qt6::Core   
                    Qt6::Gui
                    Qt6::Charts
                    Matplot++::matplot                    
                    )   