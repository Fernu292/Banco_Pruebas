# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.27

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /home/fernu/Documents/clion-2023.3.2/bin/cmake/linux/x64/bin/cmake

# The command to remove a file.
RM = /home/fernu/Documents/clion-2023.3.2/bin/cmake/linux/x64/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/fernu/Projects/Banco_Pruebas

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/fernu/Projects/Banco_Pruebas/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/Banco_Pruebas.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/Banco_Pruebas.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/Banco_Pruebas.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/Banco_Pruebas.dir/flags.make

CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.o: CMakeFiles/Banco_Pruebas.dir/flags.make
CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.o: Banco_Pruebas_autogen/mocs_compilation.cpp
CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.o: CMakeFiles/Banco_Pruebas.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/home/fernu/Projects/Banco_Pruebas/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.o -MF CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.o.d -o CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.o -c /home/fernu/Projects/Banco_Pruebas/cmake-build-debug/Banco_Pruebas_autogen/mocs_compilation.cpp

CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/fernu/Projects/Banco_Pruebas/cmake-build-debug/Banco_Pruebas_autogen/mocs_compilation.cpp > CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.i

CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/fernu/Projects/Banco_Pruebas/cmake-build-debug/Banco_Pruebas_autogen/mocs_compilation.cpp -o CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.s

CMakeFiles/Banco_Pruebas.dir/src/main.cpp.o: CMakeFiles/Banco_Pruebas.dir/flags.make
CMakeFiles/Banco_Pruebas.dir/src/main.cpp.o: /home/fernu/Projects/Banco_Pruebas/src/main.cpp
CMakeFiles/Banco_Pruebas.dir/src/main.cpp.o: CMakeFiles/Banco_Pruebas.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/home/fernu/Projects/Banco_Pruebas/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/Banco_Pruebas.dir/src/main.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/Banco_Pruebas.dir/src/main.cpp.o -MF CMakeFiles/Banco_Pruebas.dir/src/main.cpp.o.d -o CMakeFiles/Banco_Pruebas.dir/src/main.cpp.o -c /home/fernu/Projects/Banco_Pruebas/src/main.cpp

CMakeFiles/Banco_Pruebas.dir/src/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/Banco_Pruebas.dir/src/main.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/fernu/Projects/Banco_Pruebas/src/main.cpp > CMakeFiles/Banco_Pruebas.dir/src/main.cpp.i

CMakeFiles/Banco_Pruebas.dir/src/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/Banco_Pruebas.dir/src/main.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/fernu/Projects/Banco_Pruebas/src/main.cpp -o CMakeFiles/Banco_Pruebas.dir/src/main.cpp.s

CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.o: CMakeFiles/Banco_Pruebas.dir/flags.make
CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.o: /home/fernu/Projects/Banco_Pruebas/src/Tools/serialReader.cpp
CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.o: CMakeFiles/Banco_Pruebas.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/home/fernu/Projects/Banco_Pruebas/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.o -MF CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.o.d -o CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.o -c /home/fernu/Projects/Banco_Pruebas/src/Tools/serialReader.cpp

CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/fernu/Projects/Banco_Pruebas/src/Tools/serialReader.cpp > CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.i

CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/fernu/Projects/Banco_Pruebas/src/Tools/serialReader.cpp -o CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.s

CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.o: CMakeFiles/Banco_Pruebas.dir/flags.make
CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.o: /home/fernu/Projects/Banco_Pruebas/src/Ui/Windows/MainWindow.cpp
CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.o: CMakeFiles/Banco_Pruebas.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/home/fernu/Projects/Banco_Pruebas/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.o -MF CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.o.d -o CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.o -c /home/fernu/Projects/Banco_Pruebas/src/Ui/Windows/MainWindow.cpp

CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/fernu/Projects/Banco_Pruebas/src/Ui/Windows/MainWindow.cpp > CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.i

CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/fernu/Projects/Banco_Pruebas/src/Ui/Windows/MainWindow.cpp -o CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.s

CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.o: CMakeFiles/Banco_Pruebas.dir/flags.make
CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.o: /home/fernu/Projects/Banco_Pruebas/src/Ui/Components/LinearChart.cpp
CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.o: CMakeFiles/Banco_Pruebas.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/home/fernu/Projects/Banco_Pruebas/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.o -MF CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.o.d -o CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.o -c /home/fernu/Projects/Banco_Pruebas/src/Ui/Components/LinearChart.cpp

CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/fernu/Projects/Banco_Pruebas/src/Ui/Components/LinearChart.cpp > CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.i

CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/fernu/Projects/Banco_Pruebas/src/Ui/Components/LinearChart.cpp -o CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.s

# Object files for target Banco_Pruebas
Banco_Pruebas_OBJECTS = \
"CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.o" \
"CMakeFiles/Banco_Pruebas.dir/src/main.cpp.o" \
"CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.o" \
"CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.o" \
"CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.o"

# External object files for target Banco_Pruebas
Banco_Pruebas_EXTERNAL_OBJECTS =

Banco_Pruebas: CMakeFiles/Banco_Pruebas.dir/Banco_Pruebas_autogen/mocs_compilation.cpp.o
Banco_Pruebas: CMakeFiles/Banco_Pruebas.dir/src/main.cpp.o
Banco_Pruebas: CMakeFiles/Banco_Pruebas.dir/src/Tools/serialReader.cpp.o
Banco_Pruebas: CMakeFiles/Banco_Pruebas.dir/src/Ui/Windows/MainWindow.cpp.o
Banco_Pruebas: CMakeFiles/Banco_Pruebas.dir/src/Ui/Components/LinearChart.cpp.o
Banco_Pruebas: CMakeFiles/Banco_Pruebas.dir/build.make
Banco_Pruebas: /usr/lib/libQt6Charts.so.6.6.1
Banco_Pruebas: /usr/lib/libQt6OpenGLWidgets.so.6.6.1
Banco_Pruebas: /usr/lib/libQt6Widgets.so.6.6.1
Banco_Pruebas: /usr/lib/libQt6OpenGL.so.6.6.1
Banco_Pruebas: /usr/lib/libQt6Gui.so.6.6.1
Banco_Pruebas: /usr/lib/libQt6Core.so.6.6.1
Banco_Pruebas: /usr/lib/libGLX.so
Banco_Pruebas: /usr/lib/libOpenGL.so
Banco_Pruebas: CMakeFiles/Banco_Pruebas.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=/home/fernu/Projects/Banco_Pruebas/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Linking CXX executable Banco_Pruebas"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/Banco_Pruebas.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/Banco_Pruebas.dir/build: Banco_Pruebas
.PHONY : CMakeFiles/Banco_Pruebas.dir/build

CMakeFiles/Banco_Pruebas.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/Banco_Pruebas.dir/cmake_clean.cmake
.PHONY : CMakeFiles/Banco_Pruebas.dir/clean

CMakeFiles/Banco_Pruebas.dir/depend:
	cd /home/fernu/Projects/Banco_Pruebas/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/fernu/Projects/Banco_Pruebas /home/fernu/Projects/Banco_Pruebas /home/fernu/Projects/Banco_Pruebas/cmake-build-debug /home/fernu/Projects/Banco_Pruebas/cmake-build-debug /home/fernu/Projects/Banco_Pruebas/cmake-build-debug/CMakeFiles/Banco_Pruebas.dir/DependInfo.cmake "--color=$(COLOR)"
.PHONY : CMakeFiles/Banco_Pruebas.dir/depend

