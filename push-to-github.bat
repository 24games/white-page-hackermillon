@echo off
echo ========================================
echo  PUSH PARA GITHUB - WHITE PAGE HACKERMILLON
echo ========================================
echo.

echo [1/4] Verificando status do Git...
git status
echo.

echo [2/4] Adicionando todos os arquivos...
git add .
echo.

echo [3/4] Criando commit...
git commit -m "Update: Atualização da landing page"
echo.

echo [4/4] Enviando para GitHub...
git push origin main --verbose
echo.

echo ========================================
echo  PUSH CONCLUIDO!
echo ========================================
echo.
echo Repositorio: https://github.com/24games/white-page-hackermillon
echo.
pause




